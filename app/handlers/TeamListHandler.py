import json
import webapp2
from BaseHandler import BaseHandler
from app.models.Team import Team
from app.models.Individual import Individual

class TeamListHandler(BaseHandler):
	def get(self):
		if not self.user:
			self.response.status = '401'
			self.response.write(json.dumps({
				'status': '401',
				'error': 'Unauthorized',
			}))
			return
		teams = Team.query(Team.coach == self.user.key).get()
		if not teams:
			self.response.status = '404'
			self.response.write(json.dumps({
				'status': '404',
				'error': 'Not Found',
				'message': 'No teams registered to this user exist.'
			}))
			return
		self.response.write(json.dumps(teams))


	def post(self):
		try:
			j = json.loads(self.request.body)
		except ValueError as e:
			self.response.status = '400'
			self.response.write(json.dumps({
				'status': '400',
				'error': 'Bad Request',
				'message': 'Invalid json in body.'
			}))
			return

		teamname = j.get('teamname');
		members = j.get('members');
		combinable = j.get('combinable');
		team = Team(name=teamname,
				combinable=combinable,
				year=2017,
				coach=self.user.key);
		team.put();
		self.response.status = '201'
		self.response.headers.add('Location', team.key.urlsafe())
		self.response.write(json.dumps({
			'status': '201',
			'message': 'Created',
			'Location': team.key.urlsafe()
		}))

		for membername in members:
			member = Individual(name=membername,
						coach=self.user.key,
						team=team.key,
						year=2017);
			member.put();
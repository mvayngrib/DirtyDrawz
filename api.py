from flask import Flask
from flask_restful import reqparse, abort, Api, Resource
from flaskext.mysql import MySQL

mysql = MySQL(autocommit = True)

app = Flask(__name__)
api = Api(app)

app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'Sharon1994928'
app.config['MYSQL_DATABASE_DB'] = 'EC601'
app.config['MYSQL_DATABASE_HOST'] = '127.0.0.1'
app.config['MYSQL_DATABASE_PORT'] = 3306
mysql.init_app(app)

parser = reqparse.RequestParser()

		
# get user detail by id
class UserId(Resource):
    def get(self,user_id):
		con=mysql.connect().cursor()
		con.execute("select id,username,email,address,phone from user where id = %s" % user_id)
		user=con.fetchone()
		return user
		
# get user detail by username
class UserName(Resource):
    def get(self,username):
		con=mysql.connect().cursor()
		con.execute("select id,username,email,address,phone from user where username = '%s'" % username)
		user=con.fetchone()
		return user
		
# post user signup
class Signup(Resource):
    def post(self):
	
		parser.add_argument('username', type=str, location='form')
		parser.add_argument('email', type=str, location='form')
		parser.add_argument('address', type=str, location='form')
		parser.add_argument('phone', type=str, location='form')
		parser.add_argument('password', type=str, location='form')
		
		args = parser.parse_args()
		con=mysql.connect().cursor()
		con.execute("select count(id) as c from user where username = '%s' AND password = '%s'" % (args['username'],args['password']))
		sign=con.fetchone()
		if(sign[0] > 0):
			return {'status': 1}
		else:
			return {'status': -1}
			
# post user signin
class Signin(Resource):
    def post(self):
	
		parser.add_argument('username', type=str, location='form')
		parser.add_argument('password', type=str, location='form')
		
		args = parser.parse_args()
		con=mysql.connect().cursor()
		rs = con.execute("INSERT INTO `user` (`username`, `email`, `address`, `phone`, `password`) VALUES ('%s', '%s', '%s', '%s', '%s')" % (args['username'],args['email'],args['address'],args['phone'],args['password']))
		if(rs):
			return {'status': 1}
		else:
			return {'status': -1}


api.add_resource(UserId, '/userId/<user_id>')
api.add_resource(UserName, '/userName/<username>')
api.add_resource(Signup, '/signup')
api.add_resource(Signin, '/signin')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=8080)

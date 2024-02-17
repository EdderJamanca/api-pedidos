const { Strategy, ExtractJwt } = require('passport-jwt');

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET
}


const JwtStrategy = new Strategy(options, (payload, done) => {
  return done(null, payload);
});
// console.log('options JwtStrategy',JwtStrategy)


module.exports=JwtStrategy;

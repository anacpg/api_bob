SERVER_PID=0
DATABASE_HOST='127.0.0.1'
MONGO_DATABASE='bob'
TODAY=`date "+%Y-%m-%d"`
PORT=4000

echo '== Starting service...'
PORT=$PORT TESTING=true MONGO_DATABASE=$TEST_DATABASE babel-node src/index.js es2015 &
SERVER_PID=$!
sleep 10
echo '== Services running on port '$PORT' :: PID '$SERVER_PID

echo '== Running tests...'
env TEST_SUITE=END2END TEST_PORT=$PORT_GATEWAY MONGO_DATABASE=$TEST_DATABASE TESTING=true mocha test
if [ $? -ne 0 ]; then
  abort
fi

echo '== Killing temporal services...'
kill -9 $SERVER_PID

trap : 0
echo '== Test script finished :: SUCCESS'

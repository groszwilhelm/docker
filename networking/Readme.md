# Networking app between nodejs, mysql and memcached
    - Node can connect to mysql and memcached
    - Mysql and memcached should not be on the same network
    - App will return a list of users from mysql

#To start the containers
## Start the node and mysql containers
    - cd to docker/node
    - docker-compose up

## Start the memcached container
    - cd to docker/memcache
    - docker-compose up
## Database 
#### Initialize
```sql
CREATE DATABASE animed
  CHARACTER SET utf8mb4
  COLLATE utf8mb4_general_ci;
  
CREATE USER 'animeshnik'@'%' IDENTIFIED WITH mysql_native_password BY 'parol';
GRANT ALL PRIVILEGES ON animed.* TO 'animeshnik'@'%';
FLUSH PRIVILEGES;
```

#### Delete
```sql
DROP DATABASE animed;
DROP USER 'animeshnik'@'%';
```

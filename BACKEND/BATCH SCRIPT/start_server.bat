@echo off
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :4000') do (
    echo Killing process on port 4000 with PID %%a
    taskkill /PID %%a /F
)
echo Starting server...
node server.js

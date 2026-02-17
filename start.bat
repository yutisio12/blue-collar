@echo off
REM Start HRMS Application dengan Docker

echo.
echo ========================================
echo    HRMS Application Starter
echo ========================================
echo.

REM Check if Docker is installed
docker --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Docker tidak terinstall!
    echo.
    echo Silakan install Docker Desktop terlebih dahulu:
    echo https://www.docker.com/products/docker-desktop
    echo.
    pause
    exit /b 1
)

REM Check if Docker is running
docker info >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Docker tidak berjalan!
    echo.
    echo Silakan jalankan Docker Desktop terlebih dahulu
    echo.
    pause
    exit /b 1
)

echo [OK] Docker terdeteksi dan berjalan
echo.

REM Start with docker-compose
echo [INFO] Menjalankan aplikasi...
docker-compose up -d

echo.
echo [INFO] Menunggu aplikasi siap...
timeout /t 5 /nobreak >nul

echo.
echo ========================================
echo    Aplikasi Sudah Berjalan!
echo ========================================
echo.
echo Akses aplikasi di:
echo    http://localhost:3000
echo.
echo Command berguna:
echo    - Lihat logs: docker-compose logs -f
echo    - Stop app:   docker-compose down
echo    - Restart:    docker-compose restart
echo.
echo ========================================
echo.

pause

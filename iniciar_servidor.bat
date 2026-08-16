@echo off
title CiberEstudio
echo Iniciando el servidor local de CiberEstudio...
powershell -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause

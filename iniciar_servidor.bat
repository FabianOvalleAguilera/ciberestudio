@echo off
title SOC Analyst Study Hub
echo Iniciando el servidor local de estudio...
powershell -ExecutionPolicy Bypass -File "%~dp0serve.ps1"
pause

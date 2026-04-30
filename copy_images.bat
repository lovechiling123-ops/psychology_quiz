@echo off
chcp 65001 >nul
echo ========================================
echo   正在複製圖片到專案資料夾...
echo ========================================
echo.

set "SRC=C:\Users\tokchou\.gemini\antigravity\brain\27e43da4-b1b8-4449-9fca-925c0a831fc0"
set "DST=C:\Users\tokchou\.gemini\antigravity\scratch\psychology_quiz"

echo [1/2] 複製封面圖 hero-bg.png ...
copy /Y "%SRC%\cover_style_test_1777554519807.png" "%DST%\hero-bg.png"
if exist "%DST%\hero-bg.png" (echo       成功!) else (echo       失敗!)

echo [2/2] 複製第一題圖 q1.png ...
copy /Y "%SRC%\q1_white_space_1777554886911.png" "%DST%\q1.png"
if exist "%DST%\q1.png" (echo       成功!) else (echo       失敗!)

echo.
echo ========================================
echo   完成！請重新整理瀏覽器查看效果。
echo ========================================
pause

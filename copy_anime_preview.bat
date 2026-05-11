@echo off
chcp 65001 >nul
echo 複製動漫風格封面圖到專案資料夾...

set "SRC=C:\Users\tokchou\.gemini\antigravity\brain\27e43da4-b1b8-4449-9fca-925c0a831fc0"
set "DST=C:\Users\tokchou\.gemini\antigravity\scratch\psychology_quiz"

copy /Y "%SRC%\cover_anime_style_1777561844631.png" "%DST%\anime-cover-preview.png"

echo.
echo 完成！請到專案資料夾打開 anime-cover-preview.png 查看
pause

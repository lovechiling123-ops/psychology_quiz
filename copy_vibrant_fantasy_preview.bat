@echo off
chcp 65001 >nul
echo 複製明亮奇幻風格(類似薩爾達調性，但原創)測試圖到專案資料夾...

set "SRC=C:\Users\tokchou\.gemini\antigravity\brain\27e43da4-b1b8-4449-9fca-925c0a831fc0"
set "DST=C:\Users\tokchou\.gemini\antigravity\scratch\psychology_quiz"

copy /Y "%SRC%\cover_vibrant_fantasy_1777563361337.png" "%DST%\vibrant-cover-preview.png"
copy /Y "%SRC%\q1_vibrant_fantasy_1777563375745.png" "%DST%\vibrant-q1-preview.png"

echo.
echo 完成！請到專案資料夾打開 vibrant-cover-preview.png 和 vibrant-q1-preview.png 查看
pause

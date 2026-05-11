@echo off
chcp 65001 >nul
echo 複製薩爾達風格測試圖到專案資料夾...

set "SRC=C:\Users\tokchou\.gemini\antigravity\brain\27e43da4-b1b8-4449-9fca-925c0a831fc0"
set "DST=C:\Users\tokchou\.gemini\antigravity\scratch\psychology_quiz"

copy /Y "%SRC%\cover_zelda_style_1777562909523.png" "%DST%\zelda-cover-preview.png"
copy /Y "%SRC%\q1_zelda_style_1777563261756.png" "%DST%\zelda-q1-preview.png"

echo.
echo 完成！請到專案資料夾打開 zelda-cover-preview.png 和 zelda-q1-preview.png 查看
pause

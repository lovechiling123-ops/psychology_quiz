@echo off
chcp 65001 >nul
echo ========================================
echo   正在複製全部動漫風格圖片到專案資料夾...
echo ========================================
echo.

set "SRC=C:\Users\tokchou\.gemini\antigravity\brain\27e43da4-b1b8-4449-9fca-925c0a831fc0"
set "DST=C:\Users\tokchou\.gemini\antigravity\scratch\psychology_quiz"

echo [封面] hero-bg.png
copy /Y "%SRC%\cover_anime_style_1777561844631.png" "%DST%\hero-bg.png"

echo [Q1] q1.png
copy /Y "%SRC%\q1_anime_style_1777562145068.png" "%DST%\q1.png"

echo [Q2] q2.png
copy /Y "%SRC%\q2_anime_style_1777562438966.png" "%DST%\q2.png"

echo [Q3] q3.png
copy /Y "%SRC%\q3_anime_style_1777562457598.png" "%DST%\q3.png"

echo [Q4] q4.png
copy /Y "%SRC%\q4_anime_style_1777562472421.png" "%DST%\q4.png"

echo [Q5] q5.png
copy /Y "%SRC%\q5_anime_style_1777562497054.png" "%DST%\q5.png"

echo [Q6] q6.png
copy /Y "%SRC%\q6_anime_style_1777562514050.png" "%DST%\q6.png"

echo [Q7] q7.png
copy /Y "%SRC%\q7_anime_style_1777562530028.png" "%DST%\q7.png"

echo [Q8] q8.png
copy /Y "%SRC%\q8_anime_style_1777562555238.png" "%DST%\q8.png"

echo [Q9] q9.png
copy /Y "%SRC%\q9_anime_style_1777562570330.png" "%DST%\q9.png"

echo [Q10] q10.png
copy /Y "%SRC%\q10_anime_style_1777562584578.png" "%DST%\q10.png"

echo.
echo ========================================
echo   完成！全部圖片已更新。
echo   請重新整理瀏覽器查看測驗效果。
echo ========================================
pause

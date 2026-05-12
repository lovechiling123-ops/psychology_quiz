@echo off
echo ========================================
echo   Copying WIDE isekai images...
echo ========================================
echo.

set SRC=C:\Users\tokchou\.gemini\antigravity\brain\29719919-9a18-46d9-a03c-f07faeaac106
set DST=C:\Users\tokchou\.gemini\antigravity\scratch\psychology_quiz

echo [Cover] preview_cover.png
copy /Y "%SRC%\cover_wide_1778512642307.png" "%DST%\preview_cover.png"

echo [Q1] preview_q1.png
copy /Y "%SRC%\q1_wide_1778512654677.png" "%DST%\preview_q1.png"

echo [Q2] preview_q2.png
copy /Y "%SRC%\q2_wide_1778512673306.png" "%DST%\preview_q2.png"

echo [Q3] preview_q3.png
copy /Y "%SRC%\q3_wide_1778512694633.png" "%DST%\preview_q3.png"

echo [Q4] preview_q4.png
copy /Y "%SRC%\q4_wide_1778512710650.png" "%DST%\preview_q4.png"

echo [Q5] preview_q5.png
copy /Y "%SRC%\q5_wide_1778512726385.png" "%DST%\preview_q5.png"

echo [Q6] preview_q6.png
copy /Y "%SRC%\q6_wide_1778512751049.png" "%DST%\preview_q6.png"

echo [Q7] preview_q7.png
copy /Y "%SRC%\q7_wide_1778512764800.png" "%DST%\preview_q7.png"

echo [Q8] preview_q8.png
copy /Y "%SRC%\q8_wide_1778512779919.png" "%DST%\preview_q8.png"

echo [Q9] preview_q9.png
copy /Y "%SRC%\q9_wide_1778512803260.png" "%DST%\preview_q9.png"

echo [Q10] preview_q10.png
copy /Y "%SRC%\q10_wide_1778512817473.png" "%DST%\preview_q10.png"

echo.
echo ========================================
echo   Done! Refresh browser to see results.
echo ========================================
pause

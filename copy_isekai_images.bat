@echo off
echo ========================================
echo   Copying isekai images to project...
echo ========================================
echo.

set SRC=C:\Users\tokchou\.gemini\antigravity\brain\29719919-9a18-46d9-a03c-f07faeaac106
set DST=C:\Users\tokchou\.gemini\antigravity\scratch\psychology_quiz

echo [Cover] preview_cover.png
copy /Y "%SRC%\cover_isekai_1778487845437.png" "%DST%\preview_cover.png"

echo [Q1] preview_q1.png
copy /Y "%SRC%\q1_isekai_1778487860819.png" "%DST%\preview_q1.png"

echo [Q2] preview_q2.png
copy /Y "%SRC%\q2_isekai_1778487875552.png" "%DST%\preview_q2.png"

echo [Q3] preview_q3.png
copy /Y "%SRC%\q3_isekai_1778487901759.png" "%DST%\preview_q3.png"

echo [Q4] preview_q4.png
copy /Y "%SRC%\q4_isekai_1778487916952.png" "%DST%\preview_q4.png"

echo [Q5] preview_q5.png
copy /Y "%SRC%\q5_isekai_1778487929051.png" "%DST%\preview_q5.png"

echo [Q6] preview_q6.png
copy /Y "%SRC%\q6_isekai_1778487954785.png" "%DST%\preview_q6.png"

echo [Q7] preview_q7.png
copy /Y "%SRC%\q7_isekai_1778487969028.png" "%DST%\preview_q7.png"

echo [Q8] preview_q8.png
copy /Y "%SRC%\q8_isekai_1778487982325.png" "%DST%\preview_q8.png"

echo [Q9] preview_q9.png
copy /Y "%SRC%\q9_isekai_1778488006257.png" "%DST%\preview_q9.png"

echo [Q10] preview_q10.png
copy /Y "%SRC%\q10_isekai_1778488019366.png" "%DST%\preview_q10.png"

echo.
echo ========================================
echo   Done! Open preview.html to view.
echo ========================================
pause

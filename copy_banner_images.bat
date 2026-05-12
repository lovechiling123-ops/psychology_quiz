@echo off
echo Cleaning up old images...
del "preview_cover.png" 2>nul
del "preview_q*.png" 2>nul
del "q*.png" 2>nul
del "hero-bg.png" 2>nul

echo Copying new banner images...
copy "C:\Users\tokchou\.gemini\antigravity\brain\5670ef3f-ef2c-4b41-a5f2-b5c19080ddd7\banner_cover_*.png" "banner_cover.png" /Y
copy "C:\Users\tokchou\.gemini\antigravity\brain\5670ef3f-ef2c-4b41-a5f2-b5c19080ddd7\banner_q1_*.png" "banner_q1.png" /Y
copy "C:\Users\tokchou\.gemini\antigravity\brain\5670ef3f-ef2c-4b41-a5f2-b5c19080ddd7\banner_q2_*.png" "banner_q2.png" /Y
copy "C:\Users\tokchou\.gemini\antigravity\brain\5670ef3f-ef2c-4b41-a5f2-b5c19080ddd7\banner_q3_*.png" "banner_q3.png" /Y
copy "C:\Users\tokchou\.gemini\antigravity\brain\5670ef3f-ef2c-4b41-a5f2-b5c19080ddd7\banner_q4_*.png" "banner_q4.png" /Y
copy "C:\Users\tokchou\.gemini\antigravity\brain\5670ef3f-ef2c-4b41-a5f2-b5c19080ddd7\banner_q5_*.png" "banner_q5.png" /Y
copy "C:\Users\tokchou\.gemini\antigravity\brain\5670ef3f-ef2c-4b41-a5f2-b5c19080ddd7\banner_q6_*.png" "banner_q6.png" /Y
copy "C:\Users\tokchou\.gemini\antigravity\brain\5670ef3f-ef2c-4b41-a5f2-b5c19080ddd7\banner_q7_*.png" "banner_q7.png" /Y
copy "C:\Users\tokchou\.gemini\antigravity\brain\5670ef3f-ef2c-4b41-a5f2-b5c19080ddd7\banner_q8_*.png" "banner_q8.png" /Y
copy "C:\Users\tokchou\.gemini\antigravity\brain\5670ef3f-ef2c-4b41-a5f2-b5c19080ddd7\banner_q9_*.png" "banner_q9.png" /Y
copy "C:\Users\tokchou\.gemini\antigravity\brain\5670ef3f-ef2c-4b41-a5f2-b5c19080ddd7\banner_q10_*.png" "banner_q10.png" /Y

echo Done!
pause

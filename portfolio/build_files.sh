echo "BUID START"
python3.8.5 -m pip install -r requirements.txt
python3.8.5 manage.py collectstatic --noinput --clear
echo "BUID END"
import zipfile
import os

try:
    with zipfile.ZipFile('repo.zip', 'r') as zip_ref:
        zip_ref.extractall('.')
    print("Extraction successful")
except Exception as e:
    print(f"Error: {e}")




# from flask_cors import CORS
# from flask import Flask, jsonify
# import requests
# from bs4 import BeautifulSoup

# Pagesnl = Flask(__name__)
# CORS(Pagesnl)

# @Pagesnl.route('/questions', methods=['GET'])
# def get_questions():
#     url1 = "https://nct.go.kr/distMental/rating/rating02_3.do"
#     response = requests.get(url1)

    
#     if response.status_code == 200:
#         soup = BeautifulSoup(response.text, 'html.parser')
#         questions = soup.select("td.tLeft")  # 클래스가 tLeft인 td 태그 선택
#         question_list = [question.get_text(strip=True) for question in questions[:9]]
#         return jsonify(question_list)
#     else:
#         return jsonify({"error": f"페이지 로딩 실패: {response.status_code}"}), 500

# if __name__ == '__main__':
#     Pagesnl.run(debug=True)
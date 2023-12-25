from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
from sklearn.neighbors import KNeighborsClassifier
from sklearn.model_selection import train_test_split
from sklearn.metrics import accuracy_score, classification_report
from pymongo import MongoClient
app = Flask(__name__)
CORS(app)
@app.route('/compute', methods=['POST'])
def compute():
    try:
        dataReq = request.json
        print(f"Accuracy: {dataReq}")
        symp1 = dataReq['symp1']
        symp2 = dataReq['symp2']
        symp3 = dataReq['symp3']
        symp4 = dataReq['symp4']
        symp5 = dataReq['symp5']
        
        client = MongoClient("mongodb://127.0.0.1:27017")
        db = client["diseasePredict"]
        collection = db["diseases"]

        
        cursor = collection.find()
        data = list(cursor)

        
        df = pd.DataFrame(data)

        
        X = df[[symp1, symp2, symp3, symp4, symp5]]
        y = df['prognosis']

        X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

        knn = KNeighborsClassifier(n_neighbors=50)

        knn.fit(X_train, y_train)

        y_pred = knn.predict(X_test)

        accuracy = accuracy_score(y_test, y_pred)
        print(f"Accuracy: {accuracy}")

        new_symptoms = [1, 1, 1, 1, 1] 
        predicted_disease = knn.predict([new_symptoms])

        return jsonify({'result': predicted_disease[0]})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)

#KNN Algorithm

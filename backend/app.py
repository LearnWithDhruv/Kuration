import os
import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/api/enrich', methods=['POST'])
def enrich():
    data = request.json
    website = data.get('website')

    if not website:
        return jsonify({'error': 'Website is required'}), 400

    api_key = os.getenv("CLEARBIT_API_KEY")
    headers = {'Authorization': f'Bearer {api_key}'}

    try:
        response = requests.get(
            f'https://company.clearbit.com/v2/companies/find?domain={website}',
            headers=headers
        )
        if response.status_code == 200:
            enriched_data = response.json()
            return jsonify(enriched_data)
        else:
            return jsonify({'error': 'Failed to fetch data from Clearbit API'}), response.status_code
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)

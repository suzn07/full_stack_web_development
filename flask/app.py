from flask import Flask, request, render_template_string

app = Flask(__name__)

html = """
<!DOCTYPE html>
<html>
<head>
    <title>Enter Your Name</title>
</head>
<body>
    <h2>Enter Your Name</h2>
    <form method="post">
        <input type="text" name="fName" placeholder="First Name" required>
        <input type = "text" name = "lName" placeholder="Last Name">
        <button type="submit">Submit</button>
    </form>

    {% if fName and lName  %}
        <h3>Hello, {{ fName }} {{lName}}!</h3>
    {% endif %}
</body>
</html>
"""

@app.route('/', methods=['GET', 'POST'])
def home():
    fName = None
    lName = None
    if request.method == 'POST':
        fName = request.form['fName']
        lName = request.form['lName']
    return render_template_string(html, fName=fName, lName=lName)

if __name__ == '__main__':
    app.run(debug=True)

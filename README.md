# comment-parser
simple command line tool to pull out the comments of js and php files and store them in a json file

## Documentation
1. ### npm or yarn install package globally
 ```bash
 npm install -g @joshmkennedy00/comment-parser
 ```
 
 2. ### Create a .yaml file in the root of your directory.
 add this to create a config object with a file key, who's values are a list of files you with to parse.
 
 ```yaml
 Config:
  files:
    - "main.js"
    - "tests/test.js"
```

3. ### run parse cd into your project directory and run ```parse```.

```bash
parse
```

You should now see a file in the root of your project called comments.json
 

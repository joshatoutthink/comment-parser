#!/usr/bin/env node

var fs = require('fs')

const YAML = require('yaml')

//Config file to direct which files the parser should look through
const YAML_CONFIG = './parse.yaml'

/** 
 * This is the Core function
 * 1. checks if yaml file exits
 * 2. loops through all files in YAML
 * 3. pulls out content of each file
 * 4. looks at the content and searches for comments
 * 5. creates and obj for each file. File-index is the key and an array of comments is the file as the value.
 * 6. creates a json file "comments.json" with the array of objects of all the files
*/  
function readingFile(){
  
  if(fs.existsSync(YAML_CONFIG)){
    const file = fs.readFileSync(YAML_CONFIG, 'utf8')
    const parsedYAML = YAML.parse(file)
    const { files } = parsedYAML.Config
    
     const commentData = files.map((file,fileIndex)=>{
      const fileContent = fs.readFileSync(file, 'utf8')
      return {[`FILE-${fileIndex}`]: getComments(fileContent)}
    })
    
    const jsonFile = fs.writeFileSync('comments.json', JSON.stringify(commentData))
    return jsonFile
   
  }
  

}
readingFile()// inits the core function

//helper regex function that looks for comments like this
/**
 * 
 * @param {*} string 
*/
//make sure last line has no space before it.
function getComments(string){
  return string
    .match(/\/\*\*\n([^\/]+\n)\*\//g)
    .map(match=>(/\/\*\*\n([^\/]+\n)\*\//g).exec(match)[1])

}
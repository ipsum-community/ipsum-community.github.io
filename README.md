# Ipsum Community

One place, all texts, powered by everyone

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

If you didn't install ruby gems yet. Install it!
* [RubyGems](https://rubygems.org/pages/download) - RubyGems package management framework for Ruby

### Installing

A step by step series of examples that tell you have to get a development env running

We need install the Bundler from RubyGems
```sh
gem install bundler
```

### Running

After the bundler was installed, we need to run the bundle for fetch the dependencies
```sh
bundle install
```
Ok, now we need run the Jekyll Server too
```sh
jekyll serve
```
If you need a watcher:
```sh
jekyll serve --watch
```
The watcher will built everything, after each change :)

### Creating your Ipsum!

* Step 1 - Create
  * In _ipsum folder (collection)
  * Create a .md file named by your ipsum
* Step 2 - Layout
  * The default layout of a ipsum file is:
  ```markdown
  
    ---
    # Never modify this Liquid layout 
    layout: ipsumpage
    
    # Change the title to show in your ipsum page, here
    title: Lorem Ipsum
  
    # Use the ipsum filename without extension (.md)
    key: ipsum_name
    
    # Change the description to show in your ipsum page, here
    description: "Lorem Ipsum is what you want!"
    
    # If you want, put your name like author
    author: Ipsum Community
  
    # If you get this ipsum from a site, modify the url
    site: "https://ipsum-community.github.io"
    
    # If you want a button element, to choose for start with add this
    start_with: "Lorem ipsum dolor sit amet"

    # Please modify the colors and texts for what you want
    # Every element has a default color and text, so if you omit one, no problem!    
    titleColor: "#EE3829"
    descColor: "#afb3c9"
    genBtnTextColor: "#000000"
    genBtnBgColor: "#F3F7F8"
    genBtnText: "Lets Do It!"
    labelTextColor: "#EE3829"
    labelBgColor: "#F3F7F8"
    labelBorderColor: "#d62020"
    
    # Hey choose the language of your ipsum for a more complex search later
    language: English
    
    text:
    
    # Here you will set the ipsum phrases
    # Write it like below, with - to start a phrase, and that phrase put into Double Quotes
    - "Nulla facilisi."
    - "Nam ut est dui."
    - "Ut eu eros est."
    - "Ut et elit arcu."
    - "Sed non mi quam."
  
    ---
  
  ```
* Step 3 - For create a JSON
  * Add a new file with the SAME name of your new Ipsum, into the JSON folder
  * After that add this code to the file:
  
  ```markdown
  
  ---
  layout: dump_json
  ---

  ```
  * This will generate a json file when Jekyll compiling finish 
  * https://ipsum-community.github.io/json/youripsum.json 
  * To get your JSON change the name [youripsum] to your new ipsum name
  
## Built With

* [Jekyll](https://jekyllrb.com/) - The web framework for generate static pages
* [Javascript - ES2015](https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla) - Script Language to make great things!
* [SASS](http://sass-lang.com/) - To make the things with CSS easily
* [Ruby Bundler](http://bundler.io/) - Dependency Management

## Authors

* **Flávio Sena** - A nice guy!

* **Ramon Schmidt** - Another nice guy!

See also the list of [contributors](https://github.com/ipsum-community/ipsum-community.github.io/graphs/contributors) who participated in this project.

## License

Working on it...


## Acknowledgments

* Clean code
* Good work group
* Working with Javascript Module Pattern
* Jekyll to make static things incredible easily and fast



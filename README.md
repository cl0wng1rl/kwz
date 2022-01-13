# kwiz

A terminal-based quiz game!

## Installation

To install _kwiz_, run the following command:

```
npm install --global kwiz
```

## Using _kwiz_

You can play a quiz using _kwiz_ by simply running:

```
kwiz
```

You can set the number of questions, the type of answers, the difficulty of the questions and the category.

```
kwiz --number 5 --difficulty hard --category 9 --trueOrFalse
```

### Number of Questions

The number of questions can be set using the `--number` or ` -n` flag. This flag requires an integer representing the numbers of questions that you'll be asked. The default value is **10**.

### Question Type

The question type can be set to true-or-false using the `--trueOrFalse` or ` -t` flag. Without this flag, questions will be multiple choice.

### Difficulty

The difficulty can be set using the `--difficulty` or ` -d` flag. This flag requires either **"easy"**, **"medium"** or **"hard"**. By default, questions of all difficulty will be asked.

### Category

The category can be set using the `--category` or ` -c` flag. This flag requires an integer representing the category code. These can be found using the `categories` subcommand. By default, questions in all categories will be asked.

## The _categories_ Command

The `categories` subcommand returns a list of categories followed by their category code. The categories command looks like:

```
kwiz categories
```

## Help

To get help using _kwiz_, run:

```
kwiz --help
```

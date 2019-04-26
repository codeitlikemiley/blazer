# Code Linting And Laravel Test Preparation


## Requirements
- .vscode settings.json and snippets folder
- shellcheck
- phpcs

### Change phpunit.xml
- Simply open phpunit.xml and select all then delete
- type `phpunit` then tab to paste all the snippets

### Install PHPCS
- create a new file phpcs.xml
- type `phpcs` then tab to paste all the snippets
`composer require --dev "squizlabs/php_codesniffer=*"`

### Adding Git Hooks precommit for Linting PHP CODE
touch pre-commit
cmod +x pre-commit
mv pre-commit .git/hooks/

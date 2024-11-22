// Load document -- mock code

// this code will eventually be embedded into ejs for security

function parseContent() {
    // this is a dev doc
    var doc = `Name: <% short_input %>\nCharacter: <% short_input %>\nQuestions: <% long_input %>`;
    var returnCode = '';
    
    do {
        queryIndex = doc.indexOf('<%');

        // add the string in-between the queries to the product
        returnCode += doc.substring(0, queryIndex);

        var query = '';
        let index = queryIndex + 2; // accounts for query length
        do {
            query += doc.charAt(index);
            index += 1;
        } while (index < doc.length && doc.charAt(index) + doc.charAt(index + 1) != '%>');

        var args = query.replaceAll(' ', '').split(';');

        if (args[0] == 'short_input') {
            returnCode += `<input class="document-interaction short-input" type="${args[1] || 'string'}"/>`
        } else if (args[0] == 'long_input') {
            returnCode += `<textarea class="document-interaction long-input"></textarea>`
        } else {
            returnCode += query
        }

        doc = doc.substring(index + 2); // loop adds 1 to index && index starts at 0, but length starts at 1
    } while (doc.indexOf('<%') > -1);

    return returnCode;
}

document.getElementById('document').innerHTML = parseContent();
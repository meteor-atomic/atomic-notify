# Atomic Notify

Notify is a a simple and lightweight meteor package that allows
you to create self-dismissing notifications that span the top of 
your meteor application.

## Installation

```shell
meteor add atomic:notify
```

## Example
```js
Meteor.call("saveProfile", function(err, result){
  if(err)
    return Notify.exception(err);

  // Process result.  
})
```

## Usage
```js
// Display success messages
Notify.success("Your task posted successfully");

// Display an warning message
Notify.warning("Email not sent, will retry shorlty.");

// Display an error message
Notify.error("Email address is invalid, please check and try again");

// Extract message from Error's and generate and error message.
Notify.exception(Error);
```

## Configuration

You can set global configuration settings like so

```js
Notify.config("key", "value")
```

#### Available options
| Key        | default value | Description                              |
| ---------- |:-------------:| ---------------------------------------- |
| timeout    | 5000          | milliseconds before notification closes  |
| limit      | 3             | maximum about of notifications on screen |

### Sticky
You can also set notificaiton specific settings using the second
parameter on the `success`, `warning` and `error` methods.

##### Example
```js
Notify.error("This is a sticky notification.", {sticky: true});
```

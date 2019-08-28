# Timestamp Microservice

This service accepts a string as a parameter and will check whether it is either a UTC date or a Unix timestamp. It returns both the Unix timestamp and the UTC timestamp of that date as a JSON object. 
If the date string is empty the service uses the current timestamp.
You can test it at [https://intelligent-source.glitch.me/](https://intelligent-source.glitch.me/)

A Full-stack JavaScript application built using NodeJS and Express.

## Example Usage

You can access the API directly through a browser or through a get ajax request.

```
https://intelligent-source.glitch.me/api/timestamp/December 15, 2015
```
```
https://intelligent-source.glitch.me/api/timestamp/1450137600
```

## Example Output

```javascript
{ 
  "unix":"1450137600", 
  "utc":"Tue, 15 Dec 2015 00:00:00 GMT" 
}
```

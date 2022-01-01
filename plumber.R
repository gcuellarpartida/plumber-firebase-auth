library(plumber)
library(jose)

#' @filter cors
cors <- function(req, res) {
  res$setHeader("Access-Control-Allow-Origin", "*")
  if (req$REQUEST_METHOD == "OPTIONS") {
    res$setHeader("Access-Control-Allow-Methods","*")
    res$setHeader("Access-Control-Allow-Headers", req$HTTP_ACCESS_CONTROL_REQUEST_HEADERS)
    res$status <- 200 
    return(list())
  } else {
    plumber::forward()
  }
}

#* @filter checkAuthentication
function(req, res){
    auth <- try(jwt_decode_sig(req$HEADERS['authorization'],"./firebase_certs.pem"), silent=TRUE)
    if (inherits(auth,"try-error")){
        res$status <- 401
        return()
    }
    print(auth)
    plumber::forward()
}

#* @post /probability
#* @param successes
#* @param size
#* @param p
function(successes, size, p) {
    return(dbinom(successes, size, p))
}

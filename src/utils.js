export const isValidEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

export const isValidPhoneNumber = (phoneNumber) => {
   return /^\d+$/.test(phoneNumber);
}
export const isValidName = (nombre) => {
    return /\W|[0-9]/g.test(nombre);
 }
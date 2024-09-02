module.exports = function toReadable (number) {
    digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten",
     "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

    decades = ["", "ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

    indDigits = number % 10
    indDecades = Math.trunc(number%100/10)
    indHundreds = Math.trunc(number / 100)
    result = ""
    
    if (number >= 0 && number <= 19) return digits[number]

    if (indHundreds > 0) result = result + digits[indHundreds] + " hundred"
    if (number % 100 >= 1 && number % 100 <= 19) {
        result = result + " " + digits[number % 100]
        return result
    }
    if (indDecades > 0) result = result + " " + decades[indDecades]
    if (indDigits > 0) result = result + " " + digits[indDigits]
    return result.trim()
}
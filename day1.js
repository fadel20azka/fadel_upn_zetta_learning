/**
 * @param {Book} book
 * @param {Number} discount
 * @param {Number} tax
 */

 console.log("Harga Buku : ")

 function discount(book, discount, tax){
    let result = 0;
    if(book && book.price){
        const title = book.title;
        const price = book.price;
        const totalDiscount = price * (discount/100);
        const priceAfterDiscount = price - totalDiscount;
        const totalTax = priceAfterDiscount * (tax/100);
        const priceAfterTax = priceAfterDiscount + totalTax;
        result += priceAfterTax;

        console.group();
        console.log('Judul : ', title);
        console.log('Original Price : ', price);
        console.log('Discount Amount : ', totalDiscount);
        console.log('Price After Discount : ', priceAfterDiscount);
        console.log('Tax Amount : ', totalTax);
        console.log('Price After Tax : ', priceAfterTax)
        console.log()
        console.groupEnd();
    }

}

discount({title: "How to C++", price:40000, publicity: true}, 30, 10);
discount({title: "The Gangster", price:55000, publicity: false}, 10, 10);
discount({title: "Lollypop In The Fairy Garden", price:80000, publicity: true}, 50, 10);
/*
Scenario:
complement the images object from the previous task with two new methods (without rewriting the
whole object):

    - edit: which takes three arguments (title, artist, and date) and if it finds an image with
      the given title in the list, it changes its artist and date properties

    - delete: which takes the title argument and if it finds a picture with this title in the
      list, it deletes it (to delete a list element, use the splice method)

additionally, add a show method to the Image constructor, which will display information about
this one image. do not rewrite the constructor. use prototypes for this purpose. then modify
the show method of the images object so that it uses the newly created single image show method
to display the information.

test the script by calling the sequence:

images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.delete('The Last Supper');
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1504)
// -> The Starry Night (Vincent van Gogh, 1889)
*/

let Image = function(title, artist, date) {
    this.title = title;
    this.artist = artist;
    this.date = date;
}

let images = {
    list: [],
    contains(title) {
        let result = false;
        this.list.forEach(image => {
            if (image.title === title) result = true;
        })
        return result;
    },
    add(title, artist, date) {
        if (!this.contains(title)) {
            this.list.push(new Image(title, artist, date));
        }
    },
    show() {
        if (!this.list.length) {
            console.log("nothing to show");
            return
        }
        this.list.forEach(image => {
            console.log(`${image.title} (${image.artist}, ${image.date})`);
        })
    },
    clear() {
        this.list.length ? this.list.length = 0 : console.log("nothing to clear");
    }
};

images.edit = function(title, artist, date) {
    for (let image of this.list) {
        if (image.title === title) {
            image.artist = artist;
            image.date = date;
        }
    }
}

images.delete = function(title) {
    for (let image of this.list) {
        if (image.title === title) {
            this.list.splice(this.list.indexOf(image), 1);
            return;
        }
    }
}

Image.prototype.show = function() {
    console.log(`${this.title} (${this.artist}, ${this.date})`)
}

images.show = function() {
    if (!this.list.length) {
        console.log("nothing to show");
        return
    }
    this.list.forEach(image => image.show())
}





// sample solution
/*
Image.prototype.show = function() {
    console.log(`${this.title} (${this.artist}, ${this.date})`);
}

images.show = function(title) {
    for(image of this.list) {
        image.show();
    }
}

images.edit = function(title, artist, date) {
    for(image of this.list) {
        if(image.title === title) {
            image.artist = artist;
            image.date = date;
            break;
        }
    }
}

images.delete = function(title) {
    for(let i=0; i < this.list.length; i++) {
        if(this.list[i].title === title) {
            this.list.splice(i,1);
            break;
        }
    }
}
*/
images.add('Mona Lisa', 'Leonardo da Vinci', 1503);
images.add('The Last Supper', 'Leonardo da Vinci', 1495);
images.add('The Starry Night', 'Vincent van Gogh', 1889);
images.edit('Mona Lisa', 'Leonardo da Vinci', 1504);
images.delete('The Last Supper');
images.show();
// -> Mona Lisa (Leonardo da Vinci, 1504)
// -> The Starry Night (Vincent van Gogh, 1889)

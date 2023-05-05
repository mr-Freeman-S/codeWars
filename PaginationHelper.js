class PaginationHelper {
    constructor(collection, itemsPerPage) {
        // The constructor takes in an array of items and a integer indicating how many
        // items fit within a single page
        this.collection = collection
        this.itemsPerPage = itemsPerPage
        this.pagesCollection = []
        for (let i = 0; i < collection.length; i += itemsPerPage) {
            this.pagesCollection.push(collection.slice(i, itemsPerPage + i))
        }
    }

    itemCount() {
        // returns the number of items within the entire collection
        return this.collection.length
    }

    pageCount() {
        // returns the number of pages
        return this.pagesCollection.length
    }

    pageItemCount(pageIndex) {
        // returns the number of items on the current page. page_index is zero based.
        // this method should return -1 for pageIndex values that are out of range
        return pageIndex > this.pagesCollection.length - 1 || pageIndex < 0 ? -1 : this.pagesCollection.at(pageIndex ).length
    }

    pageIndex(itemIndex) {
        // determines what page an item is on. Zero based indexes
        // this method should return -1 for itemIndex values that are out of range
        return itemIndex > this.collection.length - 1 || itemIndex < 0 ? -1 : itemIndex > 0 ? Math.floor(itemIndex  / this.itemsPerPage) : 0
    }
}

const myObj = new PaginationHelper([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24], 10)

console.log(myObj.pageIndex(22))


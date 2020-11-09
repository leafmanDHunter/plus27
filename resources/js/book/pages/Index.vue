<template>
	<div class="container-fluid mt--6">
		<div class="row">
			<div class="col">
				<div class="card">
					<div class="card-header border-0 d-flex justify-content-between">
						<h3 class="mb-0">
							<span v-if="books.length > 0">
								List of Books
							</span>
							<span class="text-danger" v-else>No Record Found!</span>
						</h3>
						<add-book @successful="updateBookList"/>
					</div>
					<div v-if="is_added" class="alert alert-success font-weight-bold text-center" role="alert">Record Added!</div>

					<div v-if="is_deleted" class="alert alert-danger font-weight-bold text-center" role="alert">Record Deleted!</div>

					<div v-if="is_archive" class="alert alert-warning font-weight-bold text-center" role="alert">Record Archive!</div>

					<div v-if="is_updated" class="alert alert-success font-weight-bold text-center" role="alert">Book Updated!</div>

					<div class="table-responsive" v-if="books.length > 0">
						<table class="table align-items-center table-flush">
							<thead class="thead-light">
								<tr>
									<th scope="col">Name</th>
	                                <th scope="col">Isbn</th>
	                                <th scope="col">Publishers</th>
	                                <th scope="col">Page Numbers</th>
	                                <th scope="col"></th>
	                            </tr>
	                        </thead>
	                        <tbody>
	                        	<tr v-for="(book, index) in books" :key="index">
	                        		<td>{{ book.title }}</td>
	                                <td>{{ book.isbn }}</td>
	                                <td>{{ book.publisher }}</td>
	                                <td>{{ book.page_numbers }}</td>
	                                <td class="d-flex justify-content-around">

	                                	<edit-book :book="book" @editSuccessful="bookUpdated" />

	                                	<archive-book :book="book" @isArchive="bookArchive"/>

	                                	<delete-book :book="book" @isDeleted="bookDeleted" />
	                                </td>
	                            </tr>
	                        </tbody>
	                    </table>
	                </div>


	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
import AddBook from "./../components/AddBookModal.vue"
import DeleteBook from "./../components/DeleteBookModal.vue"
import ArchiveBook from "./../components/ArchiveBook.vue"
import EditBook from "./../components/EditBookModal.vue"

	export default {
		name: "BookIndex",
		components: {
			AddBook, DeleteBook, ArchiveBook, EditBook
		},
		data(){
			return {
				books: [],
				is_deleted: false,
				is_archive: false,
				is_updated: false,
				is_added: false,
			}
		},

		created() {
			this.getBooks();
		},

		methods: {
			updateBookList(book) {
				this.getBooks();
				this.is_added = !this.is_added

				window.setTimeout(() => {
					this.is_added = !this.is_added;

				},1500)
			},

			async getBooks() {
				
				try {
					let {data} = await axios.get('/api/book')
					this.books = data.books
				} catch(error) {
					console.log(error)
				}

			},

			bookDeleted() {
				this.getBooks();

				this.is_deleted = !this.is_deleted;

				window.setTimeout(() => {
					this.is_deleted = !this.is_deleted;

				},1500)
			},

			bookArchive() {
				this.getBooks();

				this.is_archive = !this.is_archive;

				window.setTimeout(() => {
					this.is_archive = !this.is_archive;

				},1500)
			},

			bookUpdated() {
				this.getBooks();

				this.is_updated = !this.is_updated;

				window.setTimeout(() => {
					this.is_updated = !this.is_updated;

				},1500)
			}
		}

	};
</script>
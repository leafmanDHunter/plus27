<template>
	<div class="container-fluid mt--6">
		<div class="row">
			<div class="col">
				<div class="card">
					<div class="card-header border-0 d-flex justify-content-between">
						<h3 class="mb-0">
							<span v-if="books.length > 0">
								List of Book Archives
							</span>
							<span class="text-danger" v-else>No Record Found!</span>
						</h3>
					</div>
					<div v-if="is_deleted" class="alert alert-danger font-weight-bold text-center" role="alert">Record Deleted!</div>

					<div v-if="is_restored" class="alert alert-success font-weight-bold text-center" role="alert">Record Restored!</div>


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
	                                	<delete-book :book="book" @isDeleted="bookDeleted" />

	                                	<restore-book :book="book" @isRestore="bookRestored" />
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
import DeleteBook from "./../components/DeleteBookModal.vue"
import RestoreBook from "./../components/RestoreBookModal.vue"

	export default {
		name: "BookArchive",
		components: {
			 DeleteBook, RestoreBook
		},
		data(){
			return {
				books: [],
				is_deleted: false,
				is_restored: false,
			}
			
		},

		created() {
			this.getBookArchives();
		},

		methods: {
		
			async getBookArchives() {
				
				try {
					let {data} = await axios.get('/api/book/archive')
					this.books = data.books
					
				} catch(error) {
					console.log(error)
				}

			},

			bookDeleted() {
				this.getBookArchives();

				this.is_deleted = !this.is_deleted;

				window.setTimeout(() => {
					this.is_deleted = !this.is_deleted;

				},1500)
			},

			bookRestored() {
				
				this.getBookArchives();

				this.is_restored = !this.is_restored;

				window.setTimeout(() => {
					this.is_restored = !this.is_restored;

				},1500)
			}
		}

	};
</script>
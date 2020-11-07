<template>
	<div class="container-fluid mt--6">
		<div class="row">
			<div class="col">
				<div class="card">
					<div class="card-header border-0 d-flex justify-content-between">
						<h3 class="mb-0">
							<span v-if="books.length > 0">
								List of Tables
							</span>
							<span class="text-danger" v-else>No Record Found!</span>
						</h3>
						<add-book @successful="updateBookList"/>
					</div>
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
	                                <td></td>
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
	export default {
		name: "BookIndex",
		components: {
			AddBook,
		},
		data(){
			return {
				books: [],
			}
		},

		created() {
			this.getBooks();
		},

		methods: {
			updateBookList(book) {
				this.getBooks();
			},

			async getBooks() {
				
				try {
					let {data} = await axios.get('/api/book')
					this.books = data.books
				} catch(error) {
					console.log(error)
				}

			}
		}

	};
</script>
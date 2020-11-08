<template>
	<div>
		  <!-- Button trigger modal -->
        <button type="button" class="btn btn-success btn-sm" title="Edit Book" data-toggle="modal" @click.prevent="open">
			<i class="far fa-edit"></i>
        </button>

		<div class="modal fade" :id="`edit-book-${book.id}`" tabindex="-1" role="dialog" aria-labelledby="editBookModallLabel" aria-hidden="true">
		  <div class="modal-dialog modal-dialog-centered" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="editBookModalLabel">Edit {{ book.title }}</h5>
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <form @submit.prevent="submit">
		      	<div class="modal-body">
		        	<div class="form-group">
		        		<label for="title">Title</label>
		        		<input type="text" class="form-control" v-model="form.title">
		        	</div>
		        	<div class="form-group">
		        		<label for="isbn">Isbn</label>
		        		<input type="number" class="form-control" v-model="form.isbn">
		        	</div>
		        	<div class="form-group">
		        		<label for="page-number">Page Numbers</label>
		        		<input type="number" class="form-control" v-model="form.page_numbers" id="page-number">
		        	</div>
		        	<div class="form-group">
		        		<label for="publisher">Publisher</label>
		        		<input type="text" class="form-control" v-model="form.publisher">
		        	</div>
		        </div>
		        <div class="modal-footer">
		        	<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
		        	<button type="submit" class="btn btn-primary">Save changes</button>
		        </div>
		     </form>

		    </div>
		  </div>
		</div>
	</div>
</template>

<script>
	export default {
		name:"EditBook",
		props: {
			book: {
				required: true,
				type: Object
			}
		},
		data(){
			return {
				form:{}
			}
		},
		mounted() {

            this.form = {
                ..._.pick(this.book, ['title', 'isbn', 'page_numbers', 'publisher', 'publisher']),
            }
		},
		computed: {
			openModal() {
				return $(`#edit-book-${this.book.id}`)
			},
		
		},
		methods:{

			open() {
				this.openModal.modal('toggle')
			},

			async submit() {
				try {
					let {data} = await axios.put(`/api/book/${this.book.id}`, this.form)

					this.$emit('editSuccessful', data.book)
					this.open();
				}
				catch (error) {
					console.log({error})
				}
			},

		}
	};
</script>


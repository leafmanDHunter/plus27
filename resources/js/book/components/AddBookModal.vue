<template>
	<div>
		  <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" @click.prevent="open">
            Add Book
        </button>

		<div class="modal fade" id="addBookModal" tabindex="-1" role="dialog" aria-labelledby="addBookModallLabel" aria-hidden="true">
		  <div class="modal-dialog modal-dialog-centered" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <h5 class="modal-title" id="addBookModalLabel">Add Book</h5>
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
		name:"AddBook",
		data(){
			return {
				form:{}
			}
		},
		computed: {
			openModal() {
				return $('#addBookModal')
			},
		
		},
		methods:{

			open() {
				this.openModal.modal('toggle')
			},

			async submit() {
				try {
					let {data} = await axios.post('/api/book', this.formData())
					this.form = {};
					this.$emit('successful', data.book)
					this.open();
				}
				catch (error) {
					console.log({error})
				}
			},

			formData() {
				let data = new FormData();
				Object.keys(this.form).forEach(key => {
					if(this.form[key] !== '' || this.form[key] !== null) {
						data.append(key, this.form[key]);
					}
				})

				return data;
			}
		}
	};
</script>


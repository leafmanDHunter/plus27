<template>
	<div>
		  <!-- Button trigger modal -->
        <button type="button" class="btn btn-outline-success btn-sm" title="Restore Book" data-toggle="modal" @click.prevent="open">
            <i class="fas fa-trash-restore"></i>
        </button>

		<div class="modal fade" :id="`restore-book-${book.id}`" tabindex="-1" role="dialog" aria-labelledby="restoreBookModallLabel" aria-hidden="true">
		  <div class="modal-dialog modal-dialog-centered" role="document">
		    <div class="modal-content">
		      <div class="modal-header">
		        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
		          <span aria-hidden="true">&times;</span>
		        </button>
		      </div>
		      <form @submit.prevent="submit">
		      	<div class="modal-body">
		      		<p>Are you sure you want to restore this <br>
		      		 {{ book.title }} book </p>
		        </div>
		        <div class="modal-footer">
		        	<button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
		        	<button type="submit" class="btn btn-success">Yes, Restore</button>
		        </div>
		     </form>

		    </div>
		  </div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'RestoreBook',
		props: {
			book: {
				required: true,
				type: Object,
			},
		},
		computed: {
			openModal() {
				return $(`#restore-book-${this.book.id}`)
			}
		},
		methods: {
			open() {
				this.openModal.modal('toggle')
			},
			async submit() {
				try {
					let {data} = await axios.patch(`/api/book/${this.book.id}/restore`);
					this.$emit('isRestore', data.book_is_restored)
					this.open();

				}
				catch(error) {
					console.log(error)
				}
			}
		}
	};
</script>

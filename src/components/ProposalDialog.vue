<!-- template for the modal component -->
<template>
    <div>
    <div class="modal-mask">
        <div class="modal-wrapper">
            <div class="modal-container">

                <div class="modal-header">
                    <slot name="header">
                        {{  header }}
                    </slot>
                </div>

                <div class="modal-body">
                    <slot name="body">
                        <div v-html="body"></div>
                    </slot>
                </div>

                <div class="modal-footer">
                    <slot name="footer">
                        {{ footer }}
                        <button class="modal-default-button" @click="$emit('close')">
                            {{ buttons.cancel.text }}
                        </button>
<!--                        <button class="modal-default-button" @click="$emit('submit')">-->
<!--                            {{ buttons.submit.text }}-->
<!--                        </button>-->
                    </slot>
                </div>
            </div>
        </div>
    </div>
    </div>

</template>

<script>
export default {

    name: 'ProposalDialog',
    data: function() {
        return {
            header: 'Registration',
            body: `<p>Only registered users can leave a comment. Please register.</p>
                   <form class='quick-registration' @submit.prevent="onSubmit">
                        <input placeholder="Enter your name" size="20" >
                        <input placeholder ="Email" size="20" />
                        <button id="form-submit" type="Submit">Submit</button>
                    </form>
            `,
            // buttons:  { cancel: 'Cancel', submit: 'Submit' },
            buttons:  {
                cancel: {text: 'Cancel', action: function(){this.close()}},
                submit: { text: 'Submit', action: function(){ console.log('SUBMIT')} }
                },
            footer: ''
        }

        },
    methods: {
        onSubmit(e){
            if(this.name && this.email) {
                let registration = {
                    name: this.name,
                    email: this.email,
                }
                this.$emit('registration-submitted', registration)
                this.name = null
                this.email = null
                e.preventDefault();
            } else {
                if(!this.name) this.errors.push("Name required")
                if(!this.email) this.errors.push("Email required.")

            }
        },

    }
    // get data
}
</script>

import $ from 'jquery'
import 'select2'
import 'select2/dist/css/select2.css'

function formatState (state) {
   if (!state.id) { return state.text; }

   let withIcon = state.element.closest("select").classList.contains("with-icon")
   if (!withIcon) { return state.text; }
   let $state = $(
      '<span class="select-option"><img src="assets/img/common/' +  state.element.value.toLowerCase() +
      '.png" /> ' + state.text + '</span>'
   );
   return $state;
}

export default function selectsInit() {
   $('.select2').select2({
      minimumResultsForSearch: Infinity,
      containerCssClass: 'custom-select',
      dropdownCssClass: 'custom-dropdown',
      templateResult: formatState,
      formatResult: formatState
   })
}

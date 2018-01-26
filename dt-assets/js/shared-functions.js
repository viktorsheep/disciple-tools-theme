/* global jQuery:false, wpApiSettings:false */


let API = {
  get_post(type, postId){
    return jQuery.ajax({
      type:"GET",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: wpApiSettings.root + `dt/v1/${type}/${postId}`,
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', wpApiSettings.nonce);
      }
    })
  },
  save_field_api(type, postId, post_data){
    return jQuery.ajax({
      type:"POST",
      data:JSON.stringify(post_data),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: wpApiSettings.root + `dt/v1/${type}/${postId}`,
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', wpApiSettings.nonce);
      }
    })
  },
  add_item_to_field(type, postId, post_data) {
    return jQuery.ajax({
      type: "POST",
      data: JSON.stringify(post_data),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: wpApiSettings.root +`dt/v1/${type}/${postId}/details`,
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', wpApiSettings.nonce);
      }
    })
  },
  update_contact_method_detail(type, postId, fieldKey, values) {
    let data = {key: fieldKey, values: values}
    return jQuery.ajax({
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: wpApiSettings.root + `dt/v1/${type}/${postId}/details_update`,
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', wpApiSettings.nonce);
      }
    })
  },
  remove_item_from_field(type, postId, fieldKey, valueId) {
    let data = {key: fieldKey, value: valueId}
    return jQuery.ajax({
      type: "DELETE",
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: wpApiSettings.root + `dt/v1/${type}/${postId}/details`,
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', wpApiSettings.nonce);
      }
    })
  },
  remove_field(type, postId, fieldKey) {
    let data = {key: fieldKey}
    return jQuery.ajax({
      type: "DELETE",
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: wpApiSettings.root + `dt/v1/${type}/${postId}/field`,
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', wpApiSettings.nonce);
      }
    })
  },
  post_comment(type, postId, comment) {
    return jQuery.ajax({
      type: "POST",
      data: JSON.stringify({comment}),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: wpApiSettings.root + `dt/v1/${type}/${postId}/comment`,
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', wpApiSettings.nonce);
      }
    })
  },
  get_comments(type, postId) {
    return jQuery.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: wpApiSettings.root + `dt/v1/${type}/${postId}/comments`,
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', wpApiSettings.nonce);
      }
    })
  },
  get_activity(type, postId) {
    return jQuery.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: wpApiSettings.root + `dt/v1/${type}/${postId}/activity`,
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', wpApiSettings.nonce);
      }
    })
  },
  get_single_activity(type, postId, activityId) {
    return jQuery.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: wpApiSettings.root + `dt/v1/${type}/${postId}/activity/${activityId}`,
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', wpApiSettings.nonce);
      }
    })
  },
  revert_activity(type, postId, activityId) {
    return jQuery.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: wpApiSettings.root + `dt/v1/${type}/${postId}/revert/${activityId}`,
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', wpApiSettings.nonce);
      }
    })
  },
  get_shared(type, postId){
    return jQuery.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: wpApiSettings.root + `dt/v1/${type}/${postId}/shared-with`,
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', wpApiSettings.nonce);
      }
    })
  },
  add_shared(type, postId, userId){
    return jQuery.ajax({
      type: "POST",
      data: JSON.stringify({user_id:userId}),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: wpApiSettings.root + `dt/v1/${type}/${postId}/add-shared`,
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', wpApiSettings.nonce);
      }
    })
  },
  remove_shared(type, postId, userId){
    return jQuery.ajax({
      type: "POST",
      data: JSON.stringify({user_id:userId}),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: wpApiSettings.root + `dt/v1/${type}/${postId}/remove-shared`,
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', wpApiSettings.nonce);
      }
    })
  },

  create_group(title, created_from_contact_id, parent_group_id){
    return jQuery.ajax({
      type: "POST",
      data: JSON.stringify({title, created_from_contact_id, parent_group_id}),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: wpApiSettings.root + `dt/v1/group/create`,
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', wpApiSettings.nonce);
      }
    })
  },
  search_users(query){
    return jQuery.ajax({
      type: "GET",
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      url: wpApiSettings.root + `dt/v1/users/get_users?s=${query}`,
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-WP-Nonce', wpApiSettings.nonce);
      }
    })
  }

}

let TYPEAHEADS = {

  typeaheadSource : function (field, url) {
    return {
      contacts: {
        display: "name",
        ajax: {
          url: wpApiSettings.root + url,
          data: {
            s: "{{query}}"
          },
          beforeSend: function (xhr) {
            xhr.setRequestHeader('X-WP-Nonce', wpApiSettings.nonce);
          },
          callback: {
            done: function (data) {
              return data.posts
            }
          }
        }
      }
    }
  },
  typeaheadHelpText : function (resultCount, query, result){
    var text = "";
    if (result.length > 0 && result.length < resultCount) {
      text = "Showing <strong>" + result.length + "</strong> of <strong>" + resultCount + '</strong> ' + (query ? 'elements matching "' + query + '"' : '');
    } else if (result.length > 0 && query) {
      text = 'Showing <strong>' + result.length + '</strong> items matching "' + query + '"';
    } else if (result.length > 0) {
      text = 'Showing <strong>' + result.length + '</strong> items';
    } else {
      text = 'No results matching "' + query + '"';
    }
    return text
  },

  share(type, id){
    return $.typeahead({
      input: '.js-typeahead-share',
      minLength: 0,
      searchOnFocus: true,
      source: this.typeaheadSource('share', 'dt/v1/users/get_users'),
      display: "name",
      templateValue: "{{name}}",
      dynamic: true,
      multiselect: {
        matchOn: ["ID"],
        data: function () {
          var deferred = $.Deferred();
          return API.get_shared(type, id).then(sharedResult => {
            return deferred.resolve(sharedResult.map(g => {
              return {ID: g.user_id, name: g.display_name}
            }))
          })
        },
        callback: {
          onCancel: function (node, item) {
            $('#share-result-container').html("");
            API.remove_shared(type, id, item.ID).catch(err=>{
              Typeahead['.js-typeahead-share'].addMultiselectItemLayout(
                {ID:item.ID, name:item.name}
              )
              $('#share-result-container').html(_.get(err, "responseJSON.message"));
            })
          }
        },
      },
      callback: {
        onClick: function (node, a, item, event) {
          API.add_shared(type, id, item.ID)
        },
        onResult: function (node, query, result, resultCount) {
          if (query) {
            let text = TYPEAHEADS.typeaheadHelpText(resultCount, query, result)
            $('#share-result-container').html(text);
          }
        },
        onHideLayout: function () {
          $('#share-result-container').html("");
        }
      }
    });
  }
}
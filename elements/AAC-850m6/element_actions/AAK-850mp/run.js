function(instance, properties, context) {


instance.data.inputElement.value = properties.new_value;
instance.publishState('value', properties.new_value);


}
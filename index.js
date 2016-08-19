module.exports= function(data,values){
  var regex = /<!([^%>]+)?!>/g;
  var regexforeach = /<#foreach ([^%>]+?)#>([^%]+?)<#endforeach #>/;
  var allofthem = [];

  //foreach loop
  while ((matchforeach= regexforeach.exec(data))!= null )
  {
      var newdata = matchforeach[2];
      var resetdata = newdata;
      for (var i=0; i<= values[matchforeach[1]].length-1; i++){
        newdata = newdata.replace(matchforeach[0],'');
          while(match = regex.exec(newdata)) {
              newdata = newdata.replace(match[0],values[matchforeach[1]][i][match[1]]);
          }
        allofthem.push(newdata);
        newdata = resetdata;
      }
      data = data.replace(matchforeach[0],'');
  }
  return allofthem;
};

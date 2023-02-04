document.write("<div>");
for (var i = 1; i < 11; i++) {
    document.write("<table border=1 ><thead><th colspan = 2>produtos de "+i+" </th></thead><tbody>");
     for (var j = 1; j < 11; j++) {
    document.write("<tr><td align=center>"+i+"X"+j+"</td><td align=center>"+i*j+"</td></tr>");
     }
     document.write("</tbody></table>");
    }
    document.write("</div>");
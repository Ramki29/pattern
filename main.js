var n=5;
function pattern(n)
	{
	for(i=1; i<=n; i++)
		{
		for(j=1; j<=i; j++)
			{
			document.write(i);
			}
			document.write("<br>");
		}
		document.write("<br>");	
	}
	pattern(n);
	
	
	
var n=5;
function reverse(n)
	{
	for(i=n; i>=1; i--)
		{
		for(j=1; j<=i; j++)
			{
				document.write(j);
			}
			document.write("<br>");
		}
	}
	reverse(n);
	
	
	
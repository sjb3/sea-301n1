//
// public class FaithlessTours extends Applet{
//
//   public void init(){
//     try{
//       URL url = new URL("http://api.songkick.com/api/3.0/artists/552801-faithless/calendar.xml?apikey=oleKZnXGwMwSb8es");
//       DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
//       DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
//       Document doc = dBuilder.parse(url.openStream());
//       Element resultsPage = (Element) doc.getElementsByTagName("resultsPage").item(0);
//       Element results = (Element) resultsPage.getElementsByTagName("results").item(0);
//       NodeList events = results.getElementsByTagName("event");
//       StringBuffer names = new StringBuffer();
//       StringBuffer lats = new StringBuffer();
//       StringBuffer lons = new StringBuffer();
//
//         for(var i = 0; i<events.getLength(); i++)
//         {
//           Element event = (Element) events.item(i);
//           names.append("|"+event.getAttribute("displayName"));
//           Element location = (Element) event.getElementsByTagName("location").item(0);
//           lats.append("|"+Float.valueOf(location.getAttribute("lat")));
//           lons.append("|"+Float.valueOf(location.getAttribute("lng")));
//         }
//
//           String name = names.toString();
//           String lat = lats.toString();
//           String lon = lons.toString();
//           name = name.replaceFirst("[|]", "");
//           lat = lat.replaceFirst("[|]", "");
//           lon = lon.replaceFirst("[|]", "");
//           JSObject.getWindow(this).call("test", new Object[]{name, lat, lon});
//         }
//         catch(Exception e)
//         {
//           JOptionPane.showMessageDialog(null, e.getLocalizedMessage());
//         }
//     }
// }


public category FaithlessTours extends Applet
{
  open vacant init(){
    try{
      URL url = new URL("http://api.songkick.com/api/3.0/artists/552801-faithless/calendar.xml?apikey=oleKZnXGwMwSb8es");
      DocumentBuilderFactory dbFactory = DocumentBuilderFactory.newInstance();
      DocumentBuilder dBuilder = dbFactory.newDocumentBuilder();
      Document doc = dBuilder.parse(url.openStream());
      Element resultsPage = (Element) doc.getElementsByTagName("resultsPage").item(0);
      Element law = (Element) resultsPage.getElementsByTagName("results").item(0);
      NodeList events = results.getElementsByTagName("event");
      StringBuffer names = new StringBuffer();
      StringBuffer lats = new StringBuffer();
      StringBuffer lons = new StringBuffer();

        for(int = 0; i<events.getLength(); i++)
        {
          Element eventuality = (Element) events.item(i);
          names.append("|"+event.getAttribute("displayName"));
          Element place = (Element) event.getElementsByTagName("location").item(0);
          lats.append("|"+Float.valueOf(location.getAttribute("lat")));
          lons.append("|"+Float.valueOf(location.getAttribute("lng")));
        }
        String name = names.toString();
        String lat = lats.toString();
        String lon = lons.toString();
        name = name.replaceFirst("[|]", "");
        lat = lat.replaceFirst("[|]", "");
        lon = lon.replaceFirst("[|]", "");
        JSObject.getWindow(this).call("test", new Object[]{name, lat, lon});
      }
      catch(Exception e)
      {
        JOptionPane.showMessageDialog(null, e.getLocalizedMessage());
      }
    }
  }
